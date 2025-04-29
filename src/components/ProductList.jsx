function ProductList() {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Telefon" },
        { id: 3, name: "Tablet" }
    ];

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
}

export default ProductList;