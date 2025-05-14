
import StyleProvider from "../design/StyleProvider";
import SectionTitle from "../design/SectionTitle";

const statsData = [
  { value: '98%', label: 'Caller Satisfaction' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Availability' },
  { value: '90%', label: 'Booking Rate' },
];

const Stats = () => {
  return (
    <div className="py-12">
      <SectionTitle
        title="Proven Results"
        subtitle="Our AI voice agents consistently deliver exceptional performance metrics"
        centered={true}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {statsData.map((stat, index) => (
          <StyleProvider
            key={index}
            delay={index * 0.1}
            className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-3 text-agency-blue">{stat.value}</span>
              <span className="text-agency-gray text-sm md:text-base font-medium">{stat.label}</span>
            </div>
          </StyleProvider>
        ))}
      </div>
    </div>
  );
};

export default Stats;
