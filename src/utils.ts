import {Currency, Product} from "./types";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy S21 5G',
    price: 124800,
    description: `The Samsung Galaxy S21 5G is designed to revolutionise video and photography, with beyond cinematic 8K resolution so you can snap epic photos right out of video. It has it all in two sizes, both with Samsung's fastest chipset and a massive all-day battery.`,
    image: 'https://demo.ablr.com/images/01.jpg'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21 Ultra 5G',
    price: 124800,
    description: `Galaxy S21 Ultra 5G is crafted so you don’t need to choose between video and photo. With a single tap, you can pull super-clear stills straight from high-resolution 8K video. Or if you’re looking to capture stunning photos, the 108MP camera feels like you’ve brought your own professional studio with you.`,
    image: 'https://demo.ablr.com/images/02.jpg'
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro',
    price: 124800,
    description: 'The iPhone 12 gets 5G and goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance.',
    image: 'https://demo.ablr.com/images/03.jpg'
  },
  {
    id: 4,
    name: 'Huawei Mate 40 Pro',
    price: 124800,
    description: 'Featuring with the 5nm Kirin 9000 5G SoC chipset, Huawei Mate 40 Pro comes with intelligent interaction on AI gesture control & AOD. The Mate 40 Pro also has the Ultra Vision Cine Camera for Vlog, Video and Photography. Faster HUAWEI SuperCharge. Ultra Vision Cine Camera. Featuring EMUI 11.',
    image: 'https://demo.ablr.com/images/04.jpg'
  },
  {
    id: 5,
    name: 'Bose Lifestyle 650 Home Entertainment System',
    price: 124800,
    description: 'Beauty\'s in the eye—and ear—of the beholder. So we designed the Lifestyle 650 home entertainment system to be beautiful in every way. Acoustics. Aesthetics. Craftsmanship. Simplicity. For your movies and music, it\'s the most uncompromising 5-speaker home cinema system we\'ve ever made.',
    image: 'https://demo.ablr.com/images/05.jpg'
  },
  {
    id: 6,
    name: 'Bose Surround Speaker',
    price: 124800,
    description: 'Small speakers. Big surround sound. You want to hear the car chases and explosions. You want to savour the guitar solos and sweeping verses. You want to be in the middle of all the action, and the Bose Surround Speakers put you there. Designed exclusively to pair with the Bose Soundbar 500 or the Bose Soundbar 700, these unobtrusive rear surround speakers provide sweeping sound that adds to your movies, sports and TV shows.',
    image: 'https://demo.ablr.com/images/06.jpg'
  },
  {
    id: 7,
    name: 'Bose QuietComfort® Earbuds',
    price: 124800,
    description: 'Better sound begins with better silence. That’s why these sleek, new wireless earbuds are designed with breakthrough acoustic innovations and the world’s most effective noise cancelling. Together, they produce crisp, clear audio and rich, deep bass over a bed of virtual silence—so you can hear all kinds of details that typically get lost, like the singer breathing between words or the clicking of fingers from deep in the audience. In fact, we believe you won’t get a more compelling listening experience from any other wireless earbud, whether it’s for music, podcasts, videos or calls.',
    image: 'https://demo.ablr.com/images/07.jpg'
  },
  {
    id: 8,
    name: 'Samsung Galaxy Buds Live',
    price: 124800,
    description: 'Earbuds designed to tune in to every moment. With an iconic shape and ergonomic design, the adaptive fit lets in desired sounds from your natural surroundings, and a dynamic speaker system optimised for a better experience. This is sound made just for your ears.',
    image: 'https://demo.ablr.com/images/08.jpg'
  },
]

export const renderPrice = (price: number, currency: Currency): string => {
  const EXCHANGE_RATE = 3.1;
  switch (currency) {
    case Currency.MYR:
      return `MYR ${price * EXCHANGE_RATE}`;
    case Currency.SGD:
      return `SGD ${price}`;
    default:
      return `SGD ${price}`;
  }
}