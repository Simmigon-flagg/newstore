import { Vans } from '../../components/Van/Van.jsx';
import { Vans_LABEL } from "../../components/constants/label.jsx";
import theme from '../../theme'

export const VanPage = () => {
  return (
    <div className="Van" data-testid="Van">
      {Vans_LABEL.INTRO} Page
      Van Page
      <Vans style={{ backgroundColor: theme.palette.primary }} />
    </div>
  )
};