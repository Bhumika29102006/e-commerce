// components/Sidebar.tsx

export default function Sidebar() {

  const categories = [
    "Fashion",
    "Electronics",
    "Home Decor",
    "Medicine",
    "Furniture",
    "Crafts",
    "Accessories",
    "Camera",
  ];

  return (
    <div className="sidebar">

      {categories.map((item) => (
        <div className="categoryItem" key={item}>
          {item}
        </div>
      ))}

    </div>
  );
}