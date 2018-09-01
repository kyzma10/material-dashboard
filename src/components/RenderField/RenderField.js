import React from "react";

const RenderField = ({
                       input,
                       meta,
                       ...rest
                     }) => {
  return (
    <div>
      <label></label>
      <div>
        <input {...input} {...rest} />
        {meta.touched &&
        ((meta.error && <span>{meta.error}</span>) ||
          (meta.warning && <span>{meta.warning}</span>))}
      </div>
    </div>
  );
};

export default RenderField;