import { DiagramContextMenu, Inject, SymbolPaletteComponent, UndoRedo } from '@syncfusion/ej2-react-diagrams';
import React from 'react';

function FlowchartProperties() {
    let flowshapes = [
        { id: "Terminator", shape: { type: "Flow", shape: "Terminator" } },
        { id: "Process", shape: { type: "Flow", shape: "Process" } },
        { id: "Decision", shape: { type: "Flow", shape: "Decision" } },
        { id: "Document", shape: { type: "Flow", shape: "Document" } },
        {
            id: "PreDefinedProcess",
            shape: { type: "Flow", shape: "PreDefinedProcess" }
        },
        { id: "PaperTap", shape: { type: "Flow", shape: "PaperTap" } },
        { id: "DirectData", shape: { type: "Flow", shape: "DirectData" } },
        { id: "SequentialData", shape: { type: "Flow", shape: "SequentialData" } },
        { id: "Sort", shape: { type: "Flow", shape: "Sort" } },
        { id: "MultiDocument", shape: { type: "Flow", shape: "MultiDocument" } },
        { id: "Collate", shape: { type: "Flow", shape: "Collate" } },
        { id: "SummingJunction", shape: { type: "Flow", shape: "SummingJunction" } },
        { id: "Or", shape: { type: "Flow", shape: "Or" } },
        { id: "InternalStorage", shape: { type: "Flow", shape: "InternalStorage" } },
        { id: "Extract", shape: { type: "Flow", shape: "Extract" } },
        { id: "ManualOperation", shape: { type: "Flow", shape: "ManualOperation" } },
        { id: "Merge", shape: { type: "Flow", shape: "Merge" } },
        {
            id: "OffPageReference",
            shape: { type: "Flow", shape: "OffPageReference" }
        },
        {
            id: "SequentialAccessStorage",
            shape: { type: "Flow", shape: "SequentialAccessStorage" }
        },
        { id: "Annotation", shape: { type: "Flow", shape: "Annotation" } },
        { id: "Annotation2", shape: { type: "Flow", shape: "Annotation2" } },
        { id: "Data", shape: { type: "Flow", shape: "Data" } },
        { id: "Card", shape: { type: "Flow", shape: "Card" } },
        { id: "Delay", shape: { type: "Flow", shape: "Delay" } }
    ];

    let connectorSymbols = [
        {
            id: "Link1",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "Arrow", style: { strokeColor: '#757575', fill: '#757575' } },
            style: { strokeWidth: 1, strokeColor: '#757575' }
        },
        {
            id: "link3",
            type: "Orthogonal",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' },
            targetDecorator: { shape: "None" },
        },
        {
            id: "Link21",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            targetDecorator: { shape: "Arrow", style: { strokeColor: '#757575', fill: '#757575' } },
            style: { strokeWidth: 1, strokeColor: '#757575' }
        },
        {
            id: "link23",
            type: "Straight",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' },
            targetDecorator: { shape: "None" }
        },
        {
            id: "link33",
            type: "Bezier",
            sourcePoint: { x: 0, y: 0 },
            targetPoint: { x: 60, y: 60 },
            style: { strokeWidth: 1, strokeColor: '#757575' },
            targetDecorator: { shape: "None" }
        }
    ];

    return (
        <div id="palette-space" className="sb-mobile-palette">
            <SymbolPaletteComponent
                id="symbolpalette"
                expandMode="Multiple"
                palettes={[
                    {
                        id: "flow",
                        expanded: true,
                        symbols: flowshapes,
                        iconCss: "e-diagram-icons1 e-diagram-flow",
                        title: "MFlow Components"
                    },
                    {
                        id: "connectors",
                        expanded: true,
                        symbols: connectorSymbols,
                        iconCss: "e-diagram-icons1 e-diagram-connector",
                        title: "Connectors"
                    }
                ]}
                width={"100%"}
                height={"700px"}
                symbolHeight={60}
                symbolWidth={60}
                getNodeDefaults={(symbol) => {
                    if (symbol.id === "Terminator" ||
                        symbol.id === "Process" ||
                        symbol.id === "Delay") {
                        symbol.width = 80;
                        symbol.height = 40;
                    }
                    else if (symbol.id === "Decision" ||
                        symbol.id === "Document" ||
                        symbol.id === "PreDefinedProcess" ||
                        symbol.id === "PaperTap" ||
                        symbol.id === "DirectData" ||
                        symbol.id === "MultiDocument" ||
                        symbol.id === "Data") {
                        symbol.width = 50;
                        symbol.height = 40;
                    }
                    else {
                        symbol.width = 50;
                        symbol.height = 50;
                    }
                    symbol.style.strokeColor = '#757575';
                }}
                symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
                getSymbolInfo={(symbol) => {
                    return { fit: true };
                }}>
                <Inject services={[UndoRedo, DiagramContextMenu]} />
            </SymbolPaletteComponent>
        </div>
    )
}

export default FlowchartProperties