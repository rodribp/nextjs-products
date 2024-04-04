interface Props {
  name: string;
  size?: number;
  type?: "outline" | "solid";
  color?: string;
}

export default function Icon(props: Props) {
  //we get ptops from the parent component
  const { name, size = 24, type = "outline", color = "gray" } = props;

  //list of paths based on name and type
  const paths = [
    {
      name: "shopping-bag",
      type: "outline",
      path: (
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
        />
      ),
    },
    {
      name: "shopping-bag",
      type: "solid",
      path: (
        <path
          fill-rule="evenodd"
          d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
          clip-rule="evenodd"
        />
      ),
    },
    {
      name: "search",
      type: "outline",
      path: (
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      ),
    },
    {
      name: "search",
      type: "solid",
      path: (
        <>
          <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
          <path
            fill-rule="evenodd"
            d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
            clip-rule="evenodd"
          />
        </>
      ),
    },
  ];

  //Iterate through the paths and return the path that matches the name and type
  const path = paths.find(
    (path) => path.name === name && path.type === type
  )?.path;

  return (
    <svg
      className={`w-[${size}px] h-[${size}px] text-${color}-800 dark:text-white`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={type == "outline" ? "none" : "currentColor"}
      viewBox="0 0 24 24"
    >
      {path}
    </svg>
  );
}
