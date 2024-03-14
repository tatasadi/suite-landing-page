interface StatsProps {
  label: string
  value: string
}

const Stats: React.FC<StatsProps> = ({ label, value }) => {
  return (
    <div className="text-center uppercase lg:text-left">
      <p className="text-[3rem] font-bold leading-[3.5rem] text-dark lg:-tracking-[0.03125rem]">
        {value}
      </p>
      <p className="leading-[1.625rem] tracking-[0.15625rem] text-dark-gray">
        {label}
      </p>
    </div>
  )
}

export default Stats
