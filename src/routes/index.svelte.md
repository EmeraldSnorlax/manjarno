<!--
  Very long lines are allowed. You probably want to enable word wrap in your editor.
  This is just a spicy markdown file, don't be intimidated by the Svelte in the middle.
-->

<script>
  import Stopwatch from './Stopwatch.svelte'
</script>

<Stopwatch />

# Manjarno

> Manjaro is just Arch with an installer

Surely, right?

## Security

Manjaro has a track record of pretty poor security.

### SSL Certificates

[Manjaro has let their certificates expire twice!](https://redd.it/4inrut/)

[No wait, thrice and counting.](https://web.archive.org/web/20220102232338/https://forum.manjaro.org/t/expired-certificate-for-iso-download-on-download-manjaro-org/96441)

Four times! This one is a *little* better, as at [least they've set HSTS](./expiry-2022-08-17.png), but still, *[come on man](https://www.reddit.com/r/linuxquestions/comments/wqzrpl/did_manjaro_just_forget_to_renew_the_ssl/)*.

The first time their certificate expired, they told their users to roll their clocks back as a fix:

https://web.archive.org/web/20150409040851/https://manjaro.github.io/expired_SSL_certificate/

> Seems we forgot to update our SSL certificate in time. [...] In time, please use followed workaround:
>
> open a terminal
>
> enter followed line: sudo date -s 2015-04-06 +09
>
> This will set back your system time to Mo 6. Apr 00:00:03 CEST 2015.

### Holding packages back

Holding back packages for two weeks can also cause security issues, but this issue is probably better addressed in the stability section.

## Stability

I have used both Manjaro and Arch for a while, and have ironically had fewer problems with the stability of Arch than Manjaro. Manjaro would often require coaxing to get packages to install, which seems to defeat the purpose of using Manjaro, a supposedly more user-friendly alternative to Arch.

You've probably seen across their resources that Manjaro holds Arch packages behind for two
weeks. Stability is stated as the reason for this, but that doesn't make much sense.

In practice, what this means is that software upgrades reach you later for seemingly
no reason. That means getting updates -- new features, security patches, bug fixes -- two whole weeks late. Aside from the obvious downside, it also causes a more insidious issue.

### The AUR

I'm sure one of the reasons you're gravitating towards Manjaro is the AUR. Being able to
run install scripts for anything sure sounds neat, right?

Well, most of these scripts are written with the assumption that you aren't running a system
that's effectively two weeks out of date. This causes [partial upgrades](https://wiki.archlinux.org/title/System_maintenance#Partial_upgrades_are_unsupported). At best, that program won't install or work correctly and at worst can cause all kinds of issues on your system with no obvious way to fix it.

That, and Manjaro *doesn't actually support* the AUR. Despite their [contradictory messages](https://web.archive.org/web/20220221092555/https://forum.endeavouros.com/t/is-aur-down-again/24287/9), Manjaro hides behind [blaming the users of pamac](https://web.archive.org/web/20220221090752/https://forum.manjaro.org/t/aur-please-restrain-yourself/103318). They provide insufficent warnings about the AUR and the potential risks, while providing a simplified interface for installing AUR packages via pamac. This is akin to letting someone with no briefing into a construction site. Sure, the heavy machinery might be quicker than using a shovel, but they are ultimately putting themselves in danger due to not being made aware of the consequences.

To be clear, I'm not inherently against Manjaro using the AUR. However, it should be something to think about carefully. The AUR requires at least some level of awareness, *especially* on a distro that likes to hold its packages back and make arbitrary changes. If you can reconcile this contradictory ideology, then at the very least pamac should be more careful in how it presents the AUR.

~~pamac, and by extension Manjaro, also isn't very polite to the AUR. But you can read about their DDoSes below...~~


## Management

### Funding

Manjaro has a controversy with their treasurer. Phillip Muller (Manjaro team lead) had purchased a laptop for €2000, and the treasurer asked to clarify his purchase. [This ultimately led to the treasurer being removed.](https://redd.it/hxp3zi) Isn't the whole point of a treasurer to ensure fair and efficient use of donation funds?

## Poor QA

### DDoSing the AUR

Manjaro's AUR helper, pamac, shipped a version with a bug on 2020-04-26 that accidentally sent thousands
of requests to the AUR per user. This rendered the AUR offline for *all* users across
every Arch-based distro for a few hours.

* https://www.reddit.com/r/archlinux/comments/mz3biz/is_the_aur_down_for_everyone/
* https://gitlab.manjaro.org/applications/pamac/-/issues/1017

### and again...

On 2021-10-14, Manjaro once again shipped a bad version of pamac, resulting in pamac being
blocked again. This may have been the cause for the day's earlier outage.

* https://www.reddit.com/r/linux/comments/q85t8n/pamac_manjaros_package_manager_gui_has_been/

* https://gitlab.manjaro.org/applications/pamac/-/issues/1135

While these incidents were in no way intentional, it highlights the poor QA testing that Manjaro performs. This has happened on two separate occasions in less than two years.

---

## What should I use instead?

~~I am in no way affiliated with these projects.~~

* [Arch already has an installer.](https://github.com/archlinux/archinstall)
* [EndeavourOS](https://endeavouros.com/) seems to be what Manjaro is going for -- just rightly done as far as I can tell. That said, using an Arch derivative is still a bit questionable in my view. The main excuse for doing so (lack of an automated installer) doesn't apply anymore as Arch ships with `archinstall`. However, EndeavourOS has a GUI installer, which should be much more approachable, and offers many more configurations to choose from out of the box than `archinstall`. EndeavourOS also has an online installer so you can select a desktop you would like to use instead of the themed Xfce desktop EndeavourOS ships with.
* [Garuda](https://garudalinux.org/), which aims to have a Manjaro-like experience without holding back packages and the problems Manjaro has.

Once again though, I'd like to reiterate that Arch already ships with a reasonably friendly installer.

## Quick things

I know what I've written here can be seen as inflammatory, but that's not really what this page is for. This resource is to quickly have something to point to the next time someone says "should i use manjaro??" in a chat room.

Maintaining a distro is commendable, and that alone takes credit. However, I'd rather not have
your time (and others, when Manjaro inevitably breaks, and you need to ask for help) wasted,
trying to figure out the odd quirks and issues that Manjaro causes.

[Source code under BSD-3 Clause.](https://github.com/EmeraldSnorlax/manjarno)
