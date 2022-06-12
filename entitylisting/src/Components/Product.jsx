import { Box ,Button,Image, Center,Flex, Text,Heading,Stack} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Navbar } from './AllRoute'
import { Select } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './Redux/action'
import Filter from './Filter'



const Product = () => {
  const dispatch=useDispatch();
const product=useSelector(state=>state.ecommData.data);
    useEffect(()=>{
      dispatch(getData())  
      },[])
  return (
    <div>
    <Navbar/>
  <Box>
  <Select  placeholder='Price Sort'>
  <option value='High'>High to Low</option>
  <option value='Low'>Low to High</option>
</Select>

<Filter/>
    
  </Box>
  
 <Flex flexWrap='wrap' justifyContent='space-around' padding='1rem'>
    {product?.map((item)=>(
       <Center py={12} key={item.id}>
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
     

  //   <Flex border='1px solid red' key={item.id}>
  // <Box><Image boxSize='150px' src={item.image} alt='product'/> </Box>
  // <Spacer/>
  // <Box><Text fontSize='15px' fontWeight='medium' color='#1b263b' >{item.title}</Text>
  //     <Text  fontSize='15px' fontWeight='medium' color='#1b263b' > ₹{item.price}</Text>
  //     <Text fontSize='15px' fontWeight='medium' color='#1b263b'> {item.category}</Text>
  //     </Box>
  //   </Flex>
    ))}
    </Flex>
    <Box>
      <Button  bg='gray.900' color='white' >PREV</Button>
      <Button  bg='gray.900' color='white'>NEXT</Button>
      </Box>        


    </div>
  )
}

export default Product
