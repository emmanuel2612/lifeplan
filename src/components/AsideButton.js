import "./AsideButton.scss";

const AsideButton = ({ buttonText }) => {
  return (
    <button className="AsideButton">
      <i class="fas fa-plus"></i>
      {buttonText}
    </button>
  );
};

export default AsideButton;
