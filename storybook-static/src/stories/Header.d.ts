type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
declare function Header({ user, onLogin, onLogout, onCreateAccount }: HeaderProps): import('../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime').JSX.Element;
export default Header;
