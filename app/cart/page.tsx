"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Link from 'next/link'
import CartProduct from '../components/Products/CartProduct'
import Summary from '../components/Summary'

const page = () => {

    const cartProducts = useSelector((state: RootState) => state.cart.items);



    console.log(cartProducts);

    return (
        <div>
            {cartProducts && cartProducts.length > 0 ?
                <div className='min-h-screen flex flex-col md:flex-row  justify-center md:justify-between items-center'>
                    {/* products */}
                    <div className='w-full md:w-[50%] p-2 min-h-[80vh]  flex flex-col gap-2'>
                        {cartProducts.map((product) => {
                            return (
                                <div>
                                    <CartProduct product={product} />
                                </div>
                            )
                        })}
                    </div>


                    {/* billing */}
                    <div className='w-full md:w-[50%] p-2   flex flex-col justify-start items-center min-h-[80vh]'>
                        <Summary />
                    </div>
                </div>

                :

                <div className='h-screen flex flex-col gap-4 justify-center items-center'>
                    <p className='text-3xl font-text text-palette-text'>Your cart looks empty. I can fix that. </p>
                    <Link href={"/"} className='rounded-xl border-2  border-palette-text p-2 text-palette-bg bg-palette-text hover:scale-110 duration-150 shadow-xl'>
                        Let's get you splurging.
                    </Link>
                </div>

            }
        </div>
    )
}

export default page