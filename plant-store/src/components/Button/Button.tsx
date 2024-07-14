import './Button.scss';

interface MyButtonProps {
    title: string;
    className: string;
}

export const Button = (props: MyButtonProps) => {
    const { title, className } = props;
    return (
        <button className={className} type="button">{title}</button>
    )
}
