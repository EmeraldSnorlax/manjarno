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

[Manjaro have let their certificates expire twice!](https://redd.it/4inrut/)

[No wait, thrice and counting.](https://web.archive.org/web/20220102232338/https://forum.manjaro.org/t/expired-certificate-for-iso-download-on-download-manjaro-org/96441)

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

In practice, what this actually means is that software upgrades reach you later for seemingly
no reason. That means getting updates -- new features, security patches, bug fixes -- two whole weeks late. Aside from the obvious downside this brings, it also causes a more insidious issue.

### The AUR

I'm sure one of the reasons you're gravitating towards Manjaro is the AUR. Being able to
run install scripts for anything sure sounds neat, right?

Well, most of these scripts are written with the assumption that you aren't running a system
that's effectively two weeks out of date. This causes [partial upgrades](https://wiki.archlinux.org/title/System_maintenance#Partial_upgrades_are_unsupported). At best, that program won't install or work correctly and at worst can cause all kinds of issues on your system with no obvious way to fix it.

## Management

### Funding

Manjaro has a controversy with their treasurer.  A team member had purchased a gaming laptop, and the treasurer asked to clarify this purchase. [This ultimately led to the treasurer being removed.](https://redd.it/hxp3zi) Isn't the whole point of a treasurer to ensure fair and efficient use of donation funds?

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

While these incidents were in no way intentional, it highlights the poor QA testing that Manjaro performs. This has happened on two seperate occasions in less than two years.

---

## What should I use instead?

~~I am in no way affiliated with these projects.~~

* [Arch already has an installer.](https://github.com/archlinux/archinstall)
* [EndeavourOS](https://endeavouros.com/) seems to be what Manjaro is going for, but done properly as far as I can tell. Using an Arch derivative is still a bit questionable in my opinion, though. The main excuse for doing so (lack of an automated installer) doesn't really apply anymore as Arch ships with `archinstall`. However, EndeavourOS has a GUI installer, which should be a lot more approachable, and offers many more configurations to choose from out of the box than `archinstall`.
* I've also been told about [Garuda](https://garudalinux.org/), which seems to be trying to do a similar thing to Endeavour too.

## Quick things

I know what I've written here can be seen as inflammatory, but that's not really what this page is for. This resource is to quickly have something to point to the next time someone says "should i use manjaro??" in a chat room.

Maintaining a distro is commendable, and that alone takes credit. However, I'd rather not have
your time (and others, when Manjaro inevitably breaks, and you need to ask for help) wasted,
trying to figure out the odd quirks and issues that Manjaro causes.

[Source code under BSD-3 Clause.](https://github.com/EmeraldSnorlax/manjarno)
