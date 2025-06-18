import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { ProductService } from "./product.service";

export const ProductDetailGuard: CanActivateFn = (route) => {
    const productService =inject (ProductService);
    const router = inject(Router);

    const idParam = route.paramMap.get('id');
    const id = Number(idParam);

    if(!isNaN(id) && productService.getProductById(id)) {
        return true;
    }

    router.navigate(['/shop']);
    return false;
}