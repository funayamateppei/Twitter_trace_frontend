import Home from '@/assets/icon/navi/home.svg';
import Search from '@/assets/icon/navi/search.svg';
import Notice from '@/assets/icon/navi/notice.svg';
import Mail from '@/assets/icon/navi/mail.svg';
import HomeActive from '@/assets/icon/navi/home_active.svg';
import SearchActive from '@/assets/icon/navi/search_active.svg';
import NoticeActive from '@/assets/icon/navi/notice_active.svg';
import MailActive from '@/assets/icon/navi/mail_active.svg';
import {IconBase} from './IconBase';
import {Colors} from '@/assets/styles';

const DEFAULT_COLOR = Colors.Icon.Navi;
const DEFAULT_SIZE = 24;

const icons = {Home, Search, Notice, Mail, HomeActive, SearchActive, NoticeActive, MailActive};

const Base = ({color = DEFAULT_COLOR, size = DEFAULT_SIZE, name}) => (
  <IconBase icons={icons} color={color} size={size} name={name} />
);

export const HomeIcon = props => <Base name="Home" {...props} />;
export const SearchIcon = props => <Base name="Search" {...props} />;
export const NoticeIcon = props => <Base name="Notice" {...props} />;
export const MailIcon = props => <Base name="Mail" {...props} />;
export const HomeIconActive = props => <Base name="HomeActive" {...props} />;
export const SearchIconActive = props => <Base name="SearchActive" {...props} />;
export const NoticeIconActive = props => <Base name="NoticeActive" {...props} />;
export const MailIconActive = props => <Base name="MailActive" {...props} />;
