import { PlusIcon } from '@heroicons/react/24/solid'

interface RoundedIconButtonProps {
    className?: string,
}

const RoundedIconButton = ({className}: RoundedIconButtonProps) => {
    return (
        <button className={`${className}`}>
            <PlusIcon className="h-6 w-6"></PlusIcon>
        </button>
    );
};

export default RoundedIconButton
