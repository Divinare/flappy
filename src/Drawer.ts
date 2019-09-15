import * as DrawUtils from './util/drawUtils';

class Drawer {
    public fillRect = (
        x1: number, // x-coordinate of the upper left corner of rectangle
        y1: number, // y-coordinate of the upper left corner of rectangle
        width: number, // rectangle width
        height: number, // rectangle height
        color: string
    ) => {
        const ctx = DrawUtils.getContext();
        ctx.fillStyle = color;
        ctx.fillRect(x1, y1, width, height);
    };

    public drawText = (x: number, y: number, text: string, font: string, color: string) => {
        const ctx = DrawUtils.getContext();
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.fillText(text, x, y);
    };

    public clearCanvas = () => {
        const ctx = DrawUtils.getContext();
        const canvas = DrawUtils.getCanvas();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
}

export default new Drawer();
