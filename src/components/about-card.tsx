import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card shadow={false}>
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-orange-400 ">
        <Typography variant="h6" className="mb-4 text-center" color="white">
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
        >
          {description}
        </Typography>

        {/* boton de las tajetas donde tengo mision y vision */}
        {/* <Button color="white" size="sm">
          view details
        </Button> */}
      </CardBody>
    </Card>
  );
}


export default AboutCard;