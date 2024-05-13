import React, {useCallback, useEffect, useRef, useState} from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import {PDFDocumentProxy} from "pdfjs-dist";
import 'pdfjs-dist/web/pdf_viewer.css';
import {Button, ButtonGroup, Typography} from "@mui/material";


pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
    url: string;

}

export default function PdfViewer({url}: PdfViewerProps) {
    const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
    const [pageNum, setPageNum] = useState<number>(1);
    const [numPages, setNumPages] = useState<number | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        pdfjsLib.getDocument(url).promise.then((doc) => {
            setPdfDoc(doc);
            setNumPages(doc.numPages);
        });
    }, [url]);

    const renderPage = useCallback(async (num: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const page = await pdfDoc?.getPage(num);
        const viewport = page?.getViewport({scale: 0.8});
        if (!viewport || !page) return;

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        page.render(renderContext);
    }, [pdfDoc, canvasRef]);

    useEffect(() => {
        if (pdfDoc && canvasRef.current) {
            renderPage(pageNum).then(r => r);
        }
    }, [pdfDoc, pageNum, renderPage]);


    const onPrevPage = () => {
        if (pageNum <= 1) {
            return;
        }
        setPageNum(pageNum - 1);
    };

    const onNextPage = () => {
        if (pageNum >= numPages!) {
            return;
        }
        setPageNum(pageNum + 1);
    };

    return (<>
        <div className={'flex justify-between items-center mb-1'}>
            <Typography variant={'body1'} sx={{marginRight: '1rem'}}>
                Page: {pageNum} / {numPages}
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                    onClick={onPrevPage}>
                    Previous
                </Button>
                <Button
                    onClick={onNextPage}>
                    Next
                </Button>
            </ButtonGroup>
        </div>
        <canvas id="the-canvas" ref={canvasRef} className="w-full h-full"></canvas>
    </>);
}