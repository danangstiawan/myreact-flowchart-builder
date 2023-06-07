import { Button } from '@mui/material';
import { DiagramComponent, DiagramContextMenu, Inject, Node, PrintAndExport, UndoRedo } from '@syncfusion/ej2-react-diagrams';
import { ItemDirective, ItemsDirective, ToolbarComponent } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import React, { useEffect } from 'react';
import { updateSampleSection } from './simple-base';

function FlowChartCanvas() {
    let items = [
        {
            text: "JPG"
        },
        {
            text: "PNG"
        },
        {
            text: "PDF"
        }
    ];

    let interval;
    interval = [
        1,
        9,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75,
        0.25,
        9.75
    ];
    let gridlines = {
        lineColor: "#e0e0e0",
        lineIntervals: interval
    };
    let diagramInstance;
    function getPorts(obj) {
        let ports = [
            { id: "port1", shape: "Circle", offset: { x: 0, y: 0.5 } },
            { id: "port2", shape: "Circle", offset: { x: 0.5, y: 1 } },
            { id: "port3", shape: "Circle", offset: { x: 1, y: 0.5 } },
            { id: "port4", shape: "Circle", offset: { x: 0.5, y: 0 } }
        ];
        return ports;
    }

    function rendereComplete() {
        diagramInstance.fitToPage();
    }

    useEffect(() => {
        updateSampleSection()
        rendereComplete();
    }, []);

    function OnExport(args) {
        console.log("arrgs", args)
        let exportOptions = {};
        switch (args.item.text) {
            case "JPG":
                exportOptions.format = args.item.text;
                break;
            case "PNG":
                exportOptions.format = args.item.text;
                break;
            case "PDF":
                exportOptions.format = args.item.text;
                break;
            default:
                exportOptions.format = args.item.text
        }
        console.log("export options >>", exportOptions)
        exportOptions.mode = "Download";
        exportOptions.region = "PageSettings";
        exportOptions.fileName = "Export";
        exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
        diagramInstance.exportDiagram(exportOptions);
    }

    function contentTemplate() {
        return (
            <DropDownButtonComponent items={items} iconCss="e-diagram-icons e-diagram-export" content="Export" select={OnExport} />
        );
    }

    const ExportPDF = () => {
        if (diagramInstance) {
            diagramInstance.exportDiagram({
                fileName: 'diagram',
                format: 'pdf',
                region: 'PageSettings',
                pageWidth: 792,
                pageHeight: 612,
                margin: { left: 36, right: 36, top: 36, bottom: 36 },
            });
        }
    }

    return (
        <div id="diagram-space" className="sb-mobile-diagram">
            <ToolbarComponent style={{ width: "100%", height: "10%", marginTop: "10px" }} id="toolbar_diagram"
            >
                <Button onClick={() => ExportPDF()}>ExportPDF</Button>
                <ItemsDirective>
                    <ItemDirective type="Input" text="Export" template={contentTemplate} />
                </ItemsDirective>
            </ToolbarComponent>
            <DiagramComponent
                id="diagram"
                ref={diagram => (diagramInstance = diagram)}
                width={"100%"}
                height={"700px"}
                snapSettings={{
                    horizontalGridlines: gridlines,
                    verticalGridlines: gridlines
                }}
                // nodes={nodes}
                // connectors={connectors}
                getNodeDefaults={(node) => {
                    let obj = {};
                    if (obj.width === undefined) {
                        obj.width = 145;
                    }
                    else {
                        let ratio = 100 / obj.width;
                        obj.width = 100;
                        obj.height *= ratio;
                    }
                    obj.style = { fill: "#357BD2", strokeColor: "white" };
                    obj.annotations = [
                        { style: { color: "white", fill: "transparent" } }
                    ];
                    //Set ports
                    obj.ports = getPorts(node);
                    // console.log("node", node.properties) //callback nodes
                    return obj;
                }} //Sets the default values of a connector
                getConnectorDefaults={(obj) => {
                    // console.log("obj", obj.properties) //callback connector
                    if (obj.id.indexOf("connector") !== -1) {
                        obj.type = "Orthogonal";
                        obj.targetDecorator = {
                            shape: "Arrow",
                            width: 10,
                            height: 10
                        };
                    }
                }}
                //Sets the Node style for DragEnter element.
                dragEnter={(args) => {
                    let obj = args.element;
                    if (obj instanceof Node) {
                        let oWidth = obj.width;
                        let oHeight = obj.height;
                        let ratio = 100 / obj.width;
                        obj.width = 100;
                        obj.height *= ratio;
                        obj.offsetX += (obj.width - oWidth) / 2;
                        obj.offsetY += (obj.height - oHeight) / 2;
                        obj.style = { fill: "#357bd2", strokeColor: "white" };
                    }
                }}
                selectionChange={(args) => console.log(args)}
            >
                <Inject services={[UndoRedo, DiagramContextMenu, PrintAndExport]} />
            </DiagramComponent>
        </div>
    )
}

export default FlowChartCanvas