import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <p className="text-left text-sm text-gray-500 leading-tight">
        Welcome to WHARPD:
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Women's Health Alliance for Research and Professional Development
      </h1>
      <p className="mb-4">
        The{" "}
        <em>
          Women's Health Alliance for Research and Professional Development
          (WHARPD)
        </em>{" "}
        is a visionary initiative founded by a distinguished group of experts
        who are leaders in their respective fields.
      </p>
      <p className="mb-4">
        Their collective passion and expertise drive our mission to advance
        women's health and empower women professionals.
      </p>
      <p className="mb-4">
        Supported by the EEA and Norway Grants, WHARPD stands at the forefront
        of innovation and advocacy.
      </p>

      <h2 className="mb-2 mt-4 text-xl font-semibold tracking-tighter">
        Our Mission
      </h2>
      <p className="mb-4">
        WHARPD envisions a world where women's health is prioritized, and women
        professionals are empowered to excel. We foster an inclusive and dynamic
        ecosystem where research, collaboration, and professional growth thrive.
      </p>

      <h2 className="mb-2 mt-4 text-xl font-semibold tracking-tighter">
        Join Our Movement:
      </h2>
      <p className="mb-4">
        Aspiring professionals, seasoned experts, and advocates for women's
        health—your contributions are essential. WHARPD welcomes you to be a
        part of our mission as we champion women's health and open doors to
        exciting professional opportunities.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
