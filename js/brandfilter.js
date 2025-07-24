function redirectToBrand(brand) {
    // Encode the brand name for URL safety
    window.location.href = 'brand.html?brand=' + encodeURIComponent(brand);
}
function redirectToCategory(category) {
    window.location.href = 'brand.html?category=' + encodeURIComponent(category);
}