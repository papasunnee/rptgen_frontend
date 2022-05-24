const AuthValidationErrors = ({ errors = [], ...props }) => (
  <>
    {errors.length > 0 && (
      <div {...props}>
        <div className="errorTitle">Whoops! Something went wrong.</div>

        <ul className="mt-3 errorList">
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    )}
    <style jsx>
      {`
        .errorTitle {
          color: red;
          font-weight: bold;
        }
        .errorList {
          padding: 0;
          list-style: none;
          color: red;
        }
        .errorList li {
          font-size: 12px;
        }
      `}
    </style>
  </>
);

export default AuthValidationErrors;
