import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import React from "react";
import Info from "assets/icons/exclamation.svg";

const ReactSelect = (props) => {
  const {
    isCreatable,
    onCreateOption,
    isMulti,
    onChange,
    options,
    isLoading,
    value,
    error,
    isDisabled,
    label,
    required,
    isClearable = false,
    showLabel = true,
    indexValue = 0,
    name,
    placeholder,
    className,
    ref,
  } = props;

  const defaultValue = (options, value) => {
    if (Array.isArray(value) && value?.length) {
      return options
        ? options.filter((item) => value.includes(item.value))
        : [];
    }
    return options
      ? options.find(
          (option) => option.value === value || option.label === value
        )
      : "";
  };

  const customStyles = () => ({
    menuPortal: (base) => ({ ...base, zIndex: 50 }),
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed
        ? {
            ...base,
            display: "none",
            ":hover": {
              color: "black",
            },
          }
        : {
            ...base,
            ":hover": {
              color: "black",
            },
          };
    },
  });

  return (
    <div className="relative ring-input  " index={indexValue}>
      {showLabel && (
        <label
          className={`md:text-sm text-xs text-darkBlack ${
            label ? "inline-block" : ""
          }`}
        >
          {label}
          {required && <span className="text-Sonia md:text-sm text-xs">*</span>}
        </label>
      )}
      {isCreatable ? (
        <CreatableSelect
          name={name}
          menuPlacement="auto"
          onCreateOption={onCreateOption}
          menuShouldBlockScroll={false}
          isClearable={isClearable}
          isDisabled={isDisabled}
          menuPosition={"fixed"}
          menuPortalTarget={document.body}
          styles={customStyles(value)}
          placeholder={
            <div className="placeHolder:italic text-slate-400 ">
              {placeholder ? placeholder : label}
            </div>
          }
          isMulti={isMulti}
          value={defaultValue(options, value)}
          onChange={(option) => onChange(option)}
          options={options}
          ref={ref}
          className={` react-select  my-6 rounded-md w-full md:text-base text-sm font-normal bg-transparent mt-1 block bg-white border-slate-300 
        focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 ${className}  `}
          isLoading={isLoading}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#9ca3af",
              primary25: "#141e2734",
            },
          })}
        />
      ) : (
        <Select
          name={name}
          menuPlacement="auto"
          menuShouldBlockScroll={false}
          isClearable={isClearable}
          isDisabled={isDisabled}
          menuPosition={"fixed"}
          ref={ref}
          menuPortalTarget={document.body}
          styles={customStyles(value)}
          placeholder={
            <div className="placeHolder:italic text-slate-400 ">
              {placeholder ? placeholder : label}
            </div>
          }
          isMulti={isMulti}
          value={defaultValue(options, value)}
          onChange={(option) => onChange(option)}
          options={options}
          className={` react-select  my-6 rounded-md w-full md:text-base text-sm font-normal bg-transparent mt-1 block bg-white border-slate-300 
        focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 ${className}  `}
          isLoading={isLoading}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary: "#9ca3af",
              primary25: "#141e2734",
            },
          })}
        />
      )}
      {error ? (
        <div className=" invalid-feedback text-red-600 flex sm:text-sm text-xs justify-start absolute -bottom-6 truncate left-0">
          <img
            src={Info}
            alt="Info"
            className="sm:w-4 w-4 cursor-pointer mr-2"
            width="16px"
            height="auto"
          />
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default ReactSelect;
