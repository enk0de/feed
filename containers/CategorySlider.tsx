import Chip from '../components/Chip/Chip';
import { IChipSetProps } from '../components/Chip/interface';
import { getMappedCategory } from '../utils/getMappedCategory';

interface ICategorySliderProps {
  categories: string[];
  selected?: string;
  onChange: IChipSetProps<string>['onChange'];
  withoutAll?: boolean;
}

export default function CategorySlider({
  categories,
  selected,
  onChange,
  withoutAll
}: ICategorySliderProps) {
  return (
    <Chip.Set value={selected} onChange={onChange}>
      {!withoutAll ? <Chip value={null}>전체</Chip> : null}
      {categories.map((category) => (
        <Chip value={category} key={category}>
          {getMappedCategory(category)}
        </Chip>
      ))}
    </Chip.Set>
  );
}
