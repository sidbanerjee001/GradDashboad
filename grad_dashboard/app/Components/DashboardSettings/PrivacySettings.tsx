interface PrivacyProps {
    title: string;
} 

const PrivacySettings: React.FC<PrivacyProps> = ({title}) => {
  return (
    <div id="biography-panel" className="relative">
        <div id="biography-panel-inner">
            <h1 className="text-white font-semibold text-xl">{title}</h1>

            <div id="inputs" className="w-[750px]">
                Hello
            </div>
        </div>
    </div>
  );
};

export default PrivacySettings;
