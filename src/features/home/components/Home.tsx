import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesomeLogoFull, faReact } from '@fortawesome/free-brands-svg-icons';

export function Home() {
  return (
    <div className="my-auto">
      <div className="flex space-x-3">
        <FontAwesomeIcon icon={faReact} size="9x" />
        <h1 className="text-9xl font-bold">Quickstart</h1>
      </div>
      <p className="text-center">Base application structure featuring:</p>
      <ul className="w-fit mx-auto">
        <li>
          <a
            href="https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md"
            target="_blank"
            className="underline"
          >
            Bulletproof React - Structure
          </a>
        </li>
        <li>React (TS)</li>
        <li>TailwindCSS</li>
        <li>Eslint</li>
        <li>Prettier</li>
        <li>Husky</li>
        <li>Parcel</li>
        <li>
          <span className="mr-3">FontAwesome</span>
          <FontAwesomeIcon icon={faFontAwesomeLogoFull} />
        </li>
      </ul>
    </div>
  );
}

export default Home;
