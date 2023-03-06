import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export function Error() {
  return (
    <div className="flex w-screen h-screen justify-center items-center font-roboto bg-slate-700 text-white">
      <div className="flex flex-col">
        <FontAwesomeIcon icon={faWarning} size="9x" />
        <h1 className="text-6xl font-bold text-center">404 - Not Found!</h1>
        <p>Requested resource not found, please contact admin at admin@admin.com</p>
      </div>
    </div>
  );
}

export default Error;
