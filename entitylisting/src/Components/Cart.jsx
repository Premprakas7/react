import { Box,Text,Stack,Heading,Image,Center,Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from './Redux/action'

const Cart = () => {
    const dispatch=useDispatch()
    const carts=useSelector(state=>state.ecommData.carts)

    
    useEffect(()=>{
        if(carts?.length===0){
            dispatch(fetchCart())
        }
    },[])
  return (
      <Box>
          <Flex flexWrap='wrap' justifyContent='space-around' padding='1rem'>
    {carts?.map((item)=>(
       <Center py={12} >
       <Box
         role={'group'}
         p={6}
         key={item.id}
         maxW={'330px'}
         w={'full'}
         bg={('white', '#')}
         boxShadow={'2xl'}
         rounded={'lg'}
         pos={'relative'}
         zIndex={1}>
         <Box
           rounded={'lg'}
           mt={-12}
           pos={'relative'}
           height={'230px'}
           _after={{
             transition: 'all .3s ease',
             content: '""',
             w: 'full',
             h: 'full',
             pos: 'absolute',
             top: 5,
             left: 0,
             backgroundImage: `url(${item.image})`,
             filter: 'blur(15px)',
             zIndex: -1,
           }}
           _groupHover={{
             _after: {
               filter: 'blur(20px)',
             },
           }}>
           <Image
             rounded={'lg'}
             height={230}
             width={282}
             objectFit={'fit'}
             src={item.image}
           />
         </Box>
         <Stack pt={10} align={'center'}>
           <Text  fontSize={'sm'} textTransform={'uppercase'}>
             {item.category}
           </Text>
           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
             {item.title}
           </Heading>
           <Stack direction={'row'} align={'center'}>
             <Text fontWeight={800} fontSize={'xl'}>
             ₹{item.price}
             </Text>
            
           </Stack>
         </Stack>
       </Box>
     </Center>
    ))}
    </Flex>

      </Box>
   
     

  )
}

export default Cart
