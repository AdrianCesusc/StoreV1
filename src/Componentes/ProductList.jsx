import { data } from '../data';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className="container-items ml-7  gap-16 grid grid-cols-3 gap-11 mt-4  mr-6 " >
			{data.map(product => (
				<div className='item hover:shadow-2xl shadow-blue-700' key={product.id}>
					<figure className= "bg-zinc-600 rounded-lg">
						<img  className="w-full h-80 object-cover rounded-lg" src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product  flex flex-col gap-5 p-8'>
						<strong className="font-mono text-xl">{product.nameProduct}</strong>
						<p className='price text-xl font-mono'>R$ {product.price}</p>
						<button className="bg-black h-9 text-white hover:animate-jump animate-once animate-duration-[1200ms]"   onClick={() => onAddProduct(product)}>
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			))}
		</div>
	);
};