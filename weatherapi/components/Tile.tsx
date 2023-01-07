import Feels from "./Icons/Feels";
import Wind from "./Icons/Wind";
import Humidity from "./Icons/Humidity";
import Visibility from "./Icons/Visibility";
import Pressure from "./Icons/Pressure";
import Pop from "./Icons/Pop";
type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop';
  title: string;
  info: string | JSX.Element;
  description: string;
};


const icons ={
    wind : Wind
    feels: Feels
    humidity: Humidity
    visibility: Visibility
    pressure: Pressure
    pop: Pop
}

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  return <div></div>;
};

export default Tile;
