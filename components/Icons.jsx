import {
    ArrowCircleRight,
	ArrowHookUpLeft,
	ArrowHookUpRight,
	ImageAdd,
	Link as LinkIcon,
	Mail as MailIcon,
	Navigation as NavigationIcon,
	Password as PasswordIcon,
	Star as StarIcon,
	TextAlignCenter,
	TextAlignLeft,
	TextAlignRight,
	TextBold,
	TextHeader1,
	TextHeader2,
	TextHeader3,
	TextIndentIncrease,
	TextItalic,
	TextQuote,
	TextStrikethrough,
	TextUnderline,
} from "@styled-icons/fluentui-system-filled";
import { FacebookF, Github as GithubIcon, Google as GoogleIcon } from "@styled-icons/fa-brands";
const Undo = () => {
	return <ArrowHookUpLeft size="24px" />;
};

const Redo = () => {
	return <ArrowHookUpRight size="24px" />;
};

const Bold = () => {
    return <TextBold size="24px" />;
}

const Italic = () => {
    return <TextItalic size="24px" />;
}

const Underline = () => {
    return <TextUnderline size="24px" />;
}

const Strikethrough = () => {
    return <TextStrikethrough size="24px" />;
}

const Header1 = () => {
    return <TextHeader1 size="24px" />;
}

const Header2 = () => {
    return <TextHeader2 size="24px" />;
}

const Header3 = () => {
    return <TextHeader3 size="24px" />;
}

const IndentIncrease = () => {
    return <TextIndentIncrease size="24px" />;
}

const AlignLeft = () => {
    return <TextAlignLeft size="24px" />;
}

const AlignCenter = () => {
    return <TextAlignCenter size="24px" />;
}

const AlignRight = () => {
    return <TextAlignRight size="24px" />;
}

const Link = () => {
    return <LinkIcon size="24px" />;
}

const Image = () => {
    return <ImageAdd size="24px" />;
}

const Mail = () => {
    return <MailIcon size="24px" />;
}

const Password = () => {
    return <PasswordIcon size="24px" />;
}

const Navigation = () => {
    return <NavigationIcon size="24px" />;
}

const Star = () => {
    return <StarIcon size="24px" />;
}

const Continue = () => {
    return <ArrowCircleRight size="24px" />;
}

const Quote = () => {
    return <TextQuote size="24px" />;
}

const Github = () => {
    return <GithubIcon size="24px" />;
}

const Google = () => {
    return <GoogleIcon size="24px" color="#de5246" />;
}

const Facebook = () => {
    return <FacebookF size="24px" />;
}

export {
    Undo,
    Redo,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Header1,
    Header2,
    Header3,
    IndentIncrease,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Link,
    Image,
    Mail,
    Password,
    Navigation,
    Star,
    Continue,
    Quote,
    Github,
    Google,
    Facebook,
}