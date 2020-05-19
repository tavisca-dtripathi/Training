import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../services/app.htttp.service';

@Directive({
    selector: '[productdirective]'
})
export class ProductIdDirective {
    constructor(private ele: ElementRef, private renderer: Renderer2, private service: HttpService) {
    }

    @Input('productdirective') productId: string;

    // logic for directive
    private applyColor(productId: string): void {
        // subscribe to the observable
        this.service.get().subscribe((data) => {
            let color:string = null;
            console.log(`received response ${JSON.stringify(data)}`);
            data.forEach((product) => {
                if (product.ProductId === productId)
                    color = "red"
            });
            this.renderer.setStyle(this.ele.nativeElement,
                'border-color',
                color);
        },
            (error) => {
                console.log(`error in response ${error}`);
            });

    }

    @HostListener('blur')
    onmouseenter(): void {
        this.applyColor(this.productId);
    }

}
