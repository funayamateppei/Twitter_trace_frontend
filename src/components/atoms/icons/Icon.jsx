import Back from '@/assets/icon/back.svg';
import Camera from '@/assets/icon/camera.svg';
import Close from '@/assets/icon/close.svg';
import Comment from '@/assets/icon/comment.svg';
import Like from '@/assets/icon/like.svg';
import MailPlus from '@/assets/icon/mail_plus.svg';
import Plus from '@/assets/icon/plus.svg';
import Retweet from '@/assets/icon/retweet.svg';
import Setting from '@/assets/icon/setting.svg';
import Global from '@/assets/icon/global.svg';
import Image from '@/assets/icon/image.svg';
import {IconBase} from './IconBase';
import {Colors} from '@/assets/styles';

const DEFAULT_COLOR = Colors.Icon.Primary;
const DEFAULT_SIZE = 18;

const icons = {Back, Camera, Close, Comment, Like, MailPlus, Plus, Retweet, Setting, Global, Image};

const Base = ({color = DEFAULT_COLOR, size = DEFAULT_SIZE, name}) => (
  <IconBase icons={icons} color={color} size={size} name={name} />
);

export const BackIcon = props => <Base name="Back" {...props} />;
export const CameraIcon = props => <Base name="Camera" {...props} />;
export const CloseIcon = props => <Base name="Close" {...props} />;
export const CommentIcon = props => <Base name="Comment" {...props} />;
export const LikeIcon = props => <Base name="Like" {...props} />;
export const MailPlusIcon = props => <Base name="MailPlus" {...props} />;
export const PlusIcon = props => <Base name="Plus" {...props} />;
export const RetweetIcon = props => <Base name="Retweet" {...props} />;
export const SettingIcon = props => <Base name="Setting" {...props} />;
export const ImageIcon = props => <Base name="Image" {...props} />;
export const GlobalIcon = props => <Base name="Global" {...props} />;
