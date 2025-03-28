export default function AboutUsBox(props) {
  return (
    <div className="flex flex-col lg:flex-row items-center p-8 lg:p-10 gap-x-6 gap-y-8 text-slate-900 dark:text-white bg-white dark:bg-slate-800 rounded-lg">
      <div className="text-8xl">{props.icon}</div>
      <div className="text-center lg:text-right">
        <h4 className="font-EstedadMedium mb-6 lg:text-3xl">{props.title}</h4>
        <p className="text-[1.35rem]/10 sm:text-2xl/10 mt-3.5 lg:mt-2 opacity-70">
          {props.desc}
        </p>
      </div>
    </div>
  );
}
