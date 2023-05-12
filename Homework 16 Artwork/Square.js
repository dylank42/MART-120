class Square
{
    //constructor
    // x,y width height rgb
    constructor (x,y,w,r,g,b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.r = r;
        this.g = g;
        this.b = b;

    }

    display()
    {
        fill(this.r, this.g, this.b)
        rect(this.x, this.y, this.w)
    }
}