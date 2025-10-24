import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import {Box} from "@chakra-ui/react"

function App() {



    return (
        <>
            <Navbar />
            <Box
                bgImage="url('src/assets/bg.png')" // Замените на ваш путь к изображению
                bgSize="cover"
                bgPosition="center"
                h={{base: '50vh', md: '80vh', lg: '100vh'}}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={'rgba(0, 0, 0, 0.5)'}
                    zIndex={1}
                >
                    <Hero/>

                </Box>



            </Box>
        </>
    )
}

export default App
