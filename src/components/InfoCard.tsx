import Button from "./Button";

interface InfoCardProps {
  dogName: string;
  dogAge: number;
  dogBreed: string;
  dogImage: string;
  dogDescription: string;
}

function InfoCard(props: InfoCardProps) {
  return (
    <article className="flex flex-col items-center gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
      <img
        src={props.dogImage}
        alt={props.dogName}
        className="w-32 h-32 rounded-full object-cover"
      />
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-900">{props.dogName}</h2>
        <p className="text-sm text-gray-500">
          {props.dogBreed} · {props.dogAge} years old
        </p>
        <p className="text-sm text-gray-600 mt-1">{props.dogDescription}</p>
      </div>
      <Button label="More Details" />
    </article>
  );
}

export default InfoCard;

