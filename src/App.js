import Video20 from './components/Video20';
import PostItem from './components/PostItem';
import Video31 from './components/Video31';
import Video40 from './components/Video40';
import ClickTest from './components/ClickTest';
import Video41 from './components/Video41';
import LoginFormTest from './components/LoginFormTest';
function App() {


    return(
        
    <ChakraProvider theme={theme}>
                <LoginFormTest/>
                <PostItem/>
                <Video20/>
                <Video31/>
                <Video40/>
                <Video41/>
                <ClickTest/>
      <SplitWithImage/>
      <CaptionCarousel/>
      <WithSpeechBubbles/>
      <ProductSimpleList/>
      <ThreeTierPricing/>
      <Simple/>

      <AvatarWithRipple/>
      <BasicStatistics/>
      <LargeWithAppLinksAndSocial/>
    </ChakraProvider>

       
    )
  }
export default App;
