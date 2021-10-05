import { findIconDefinition, IconName, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type IconObject = {
  iconName: IconName,
  iconPrefix?: IconPrefix,
}

export const iconHome: IconObject = {iconName: 'home'};
export const iconPosts: IconObject = { iconName: 'newspaper', iconPrefix: 'far'};
export const iconElectrics: IconObject = { iconName: 'bolt' };

interface TypeIconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon?: IconProp,
  iconString: IconName,
  iconPrefix?: IconPrefix,
}

const Icons: React.FC<TypeIconProps> = (props) => {
  const {color = '#666', iconString, iconPrefix = 'fas', ...rest} = props;
  const findIcon = findIconDefinition({prefix: iconPrefix, iconName: iconString});
  return <FontAwesomeIcon color={color} icon={findIcon} {...rest} />;
};

export default Icons;
