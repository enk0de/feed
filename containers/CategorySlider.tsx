import Chip from '../components/Chip/Chip';
import { IChipSetProps } from '../components/Chip/interface';

interface ICategorySliderProps {
  categories: string[];
  selected: string;
  onChange: IChipSetProps<string>['onChange'];
}

export default function CategorySlider({
  categories,
  selected,
  onChange
}: ICategorySliderProps) {
  return (
    <Chip.Set value={selected} onChange={onChange}>
      <Chip value={null}>전체</Chip>
      {categories.map((category) => (
        <Chip value={category} key={category}>
          {category}
        </Chip>
      ))}
    </Chip.Set>
  );
}
