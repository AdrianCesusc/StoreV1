import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (
		<header className="flex justify-between px-10">
		<strong>LOJA TESTE</strong>

			<div className='container-icon relative '>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart w-10  stroke-black hover:cursor-pointer'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className="count-products  absolute top-1/2 right-0 text-white bg-black w-6 h-6 flex justify-center items-center rounded-xl hover:cursor-pointer">
						<span id='contador-productos' className="text-xs">{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products  absolute  bg-white w-96 top-12 right-0 rounded-xl z-1 shadow-gray-700${
						active ? '' : 'hidden-cart hidden'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product flex items-center	justify-between border-solid py-7 px-7 border-y' key={product.id}>
										<div className='info-cart-product  flex justify-between  '>
											<span className='cantidad-producto-carrito text-sm'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito text-sm ml-4'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito text-sm ml-36'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close w-6 h-6 cursor-pointer'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total flex justify-center items-center p-5 gap-5'>
								<h3 className="text-sm">Total:</h3>
								<span className='total-pagar text-sm'>${total}</span>
							</div>

							<button className='btn-clear-all bg-black text-white p-4 block w-auto mt-2.5 cursor-pointer ' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty p-5 text-center hidden'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};