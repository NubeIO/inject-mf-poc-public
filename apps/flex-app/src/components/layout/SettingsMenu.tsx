import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@nubeio/ui/dropdown-menu"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useInjection, useContainer } from "inversify-react"
import { interfaces } from "inversify"
import {
  TYPES,
  LanguageRegistry,
  ILanguageRegistry,
  ICommunicationService,
  guestPermissions,
} from "@nubeio/flex-core"
import { AclService } from "@nubeio/flex-core/acl/acl-service"

export const SettingsMenu = React.forwardRef((props: any, ref: any) => {
  const { children } = props
  const [currentRole, setCurrentRole] = useState("guest")

  const languageRegistry = useInjection<LanguageRegistry>(
    TYPES.LanguageRegistry
  )
  const commService = useInjection<ICommunicationService>(
    TYPES.CommunicationService
  )
  const aclService = useInjection<AclService>(TYPES.AclService)
  const { t, i18n } = useTranslation("flex")

  const options = languageRegistry?.getLanguageOptions() || []

  const handleLogoutClick = () => {
    commService.publishToTopic("flex.settings.logout", { message: "logout" })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className={`w-56`} side="right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t("theme")}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => {}}>
                  {t("light")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {}}>
                  {t("dark")}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {}}>
                  {t("system")}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{t("language")}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {options.map((option: any) => {
                  return (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => i18n.changeLanguage(option.value)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentRole}
          onValueChange={(newRole: string) => {
            const newPermissions =
              newRole === "guest"
                ? guestPermissions
                : [{ action: "manage", subject: "all" }]
            aclService.updatePermissions(newPermissions)
            setCurrentRole(newRole)
          }}
        >
          <DropdownMenuRadioItem value="guest">Guest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogoutClick}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
