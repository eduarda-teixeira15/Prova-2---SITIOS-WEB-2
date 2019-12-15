function Sprite(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    
    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
        
    }
}

var bg = new Sprite(0,0,600,600),
    spriteBoneco = new Sprite(686, 41, 77, 79),
    jogar = new Sprite(692, 222, 238, 96),
    perdeu = new Sprite(42, 662, 426, 258),
    spriteRecord = new Sprite(640, 685, 142 ,42),
    novo = new Sprite(679, 515, 246 ,35);
    
    