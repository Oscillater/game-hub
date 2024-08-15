import bullsEye from "../assets/icons8-bullseye-48.webp";
import thumbsUp from "../assets/icons8-thumbs-up-32.webp";
import meh from "../assets/icons8-meh-48.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap :{[key:number]:ImageProps}= {
    3: { src: meh, alt: "meh",boxSize:'45px'},
    4: { src: thumbsUp, alt: "recommended" ,boxSize:'45px'},
    5: { src: bullsEye, alt: "exceptional" ,boxSize:'55px'},
  };

  return <Image {...emojiMap[rating]} marginTop={1}/>;
};

export default Emoji;
