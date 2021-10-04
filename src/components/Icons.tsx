import { findIconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IconObject = {
  iconName: IconName,
  iconPrefix?: IconPrefix,
}

export const iconHome: IconObject = {iconName: 'home'};
export const iconPosts: IconObject = { iconName: 'newspaper', iconPrefix: 'far'};
export const iconElectrics: IconObject = { iconName: 'bolt' };

type TypeIconProps = {
  iconString: IconName,
  color?: string,
  iconPrefix?: IconPrefix,
}

const Icons: React.FC<TypeIconProps> = ({color = '#666', iconString, iconPrefix = 'fas'}) => {
  const getIcon = findIconDefinition({prefix: iconPrefix, iconName: iconString});
  return <FontAwesomeIcon color={color} icon={getIcon} />;
};

export default Icons;
