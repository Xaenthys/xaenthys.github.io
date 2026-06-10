# iCloud Sync — Legal Language Addendum

When iCloud Sync is implemented in Cultivation Timer, add the following sections to the
Privacy Policy and Terms of Service. The underscore prefix on this file keeps GitHub
Pages (Jekyll) from publishing it to the site.

---

## Privacy Policy Additions

### New Section: "iCloud Sync (Optional Premium Feature)"

Add this section **after** "Information Stored on Your Device":

```html
<h2>iCloud Sync (Optional Premium Feature)</h2>
<p>If you choose to enable iCloud Sync, the on-device data listed above will be synchronized across your Apple devices using Apple&rsquo;s CloudKit service. This means your data will be stored in your personal iCloud account in addition to being stored locally.</p>
<ul>
    <li>iCloud Sync is entirely optional and requires your explicit opt-in.</li>
    <li>Data synced through iCloud is governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple&rsquo;s Privacy Policy</a> and stored in your personal iCloud account.</li>
    <li>We do not have access to your iCloud data. Apple encrypts CloudKit data in transit and at rest.</li>
    <li>You can disable iCloud Sync at any time in the App&rsquo;s settings or through your device&rsquo;s iCloud settings.</li>
</ul>
```

### Update: "Information Stored on Your Device" intro paragraph

Change:
> This data is stored locally on your device unless you choose to include it in a support message or device backup.

To:
> This data is stored locally on your device unless you enable iCloud Sync (described below), choose to include it in a support message, or include it in a device backup.

### Update: "Third-Party Services" section

Add this bullet:
```html
<li><strong>Apple CloudKit:</strong> For optional iCloud Sync (premium feature, user-initiated only).</li>
```

Also change "the following Apple platform service only" → "the following Apple platform services only".

### Update: "Data Retention and Deletion" section

Add this bullet:
```html
<li>If iCloud Sync is enabled, disabling sync and removing the App&rsquo;s data from iCloud through your device&rsquo;s iCloud storage settings.</li>
```

### Update: "International Users" section

Change:
> Because your practice data remains on your device, there is no cross-border transfer of that data by us.

To:
> Because your practice data remains on your device (or in your personal iCloud account if you enable sync), there is no cross-border transfer of that data by us. If you enable iCloud Sync, Apple's data handling practices, including any international data transfers, are governed by Apple's Privacy Policy and applicable data processing terms.

---

## Terms of Service Additions

### Update: Section 7 "User Content and Data"

Change:
> User-created content is stored locally on your device. We do not have access to that content unless you choose to include it in a support email.

To:
> User-created content is stored locally on your device. If you enable iCloud Sync (a premium feature), your content will also be stored in your personal iCloud account. We do not have access to your content in either case, unless you choose to include it in a support email.
