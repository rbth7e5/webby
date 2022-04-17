import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu"
import {Currency} from "./types";
import {DetailedHTMLProps, Dispatch, HTMLAttributes, MouseEvent, SetStateAction, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

type CountrySwitcherProps = {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const currencyToImgSrc: Record<Currency, string> = {
  [Currency.SGD]: 'https://hatscripts.github.io/circle-flags/flags/sg.svg',
  [Currency.MYR]: 'https://hatscripts.github.io/circle-flags/flags/my.svg'
}

export default function CurrencySwitcher({ currency, setCurrency, ...divProps }: CountrySwitcherProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickAvatar = (event: MouseEvent<HTMLDivElement>) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null);
  const onChooseCurrency = (chosen: Currency) => {
    setCurrency(chosen);
    setAnchorEl(null);
  }
  return (
    <div {...divProps}>
      <Avatar style={{cursor: 'pointer'}} alt={currency} src={currencyToImgSrc[currency]} onClick={handleClickAvatar}/>
      <Menu
        id="currency-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => onChooseCurrency(Currency.SGD)}>SGD</MenuItem>
        <MenuItem onClick={() => onChooseCurrency(Currency.MYR)}>MYR</MenuItem>
      </Menu>
    </div>
  )
}