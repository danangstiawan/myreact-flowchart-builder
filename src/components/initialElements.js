export const nodes = [
    {
        id: "NewIdea",
        height: 60,
        offsetX: 300,
        offsetY: 80,
        shape: { type: "Flow", shape: "Terminator" },
        annotations: [
            {
                content: "Place Order"
            }
        ]
    },
    {
        id: "Meeting",
        height: 60,
        offsetX: 300,
        offsetY: 160,
        shape: { type: "Flow", shape: "Process" },
        annotations: [
            {
                content: "Start Transaction"
            }
        ]
    },
];

export const connectors = [
    {
        id: "connector1",
        sourceID: "NewIdea",
        targetID: "Meeting"
    },
];