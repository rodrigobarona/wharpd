import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "About Us",
  description:
    "Women's Health Alliance for Research and ProfessionalDevelopment is a pioneering organization dedicated to advancing women'shealth and empowering women professionals.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        About WHARPD
      </h1>
      <p className="mb-4">
        WHARPD - Women's Health Alliance for Research and Professional
        Development is a pioneering organization dedicated to advancing women's
        health and empowering women professionals. Supported by the EEA and
        Norway Grants, we are committed to driving innovation and advocacy in
        the field of women's health.
      </p>
      <h2 className="mb-2 mt-4 text-xl font-semibold tracking-tighter">
        Awards and Recognition:
      </h2>
      <p className="mb-4">
        Our impactful work has garnered the support and recognition of the EEA
        and Norway Grants. This esteemed endorsement underscores the importance
        of our mission and our commitment to making a lasting difference.
      </p>

      <h2 className="mb-2 mt-4 text-xl font-semibold tracking-tighter">
        Meet Our Founders:
      </h2>
      <BlogPosts />
    </section>
  );
}
